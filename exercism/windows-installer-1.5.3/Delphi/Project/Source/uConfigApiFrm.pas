unit uConfigApiFrm;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, Vcl.ExtCtrls, ovcurl,
  uTypes, Vcl.Imaging.pngimage, DosCommand;

type
  TfrmConfigAPI = class(TForm)
    Panel1: TPanel;
    Label1: TLabel;
    Label2: TLabel;
    btnFinish: TButton;
    Label3: TLabel;
    fldAPI: TEdit;
    OvcURL1: TOvcURL;
    Label4: TLabel;
    btnConfigure: TButton;
    DosCommand1: TDosCommand;
    mConfigure: TMemo;
    fldSolutionLocation: TEdit;
    btnBrowse: TButton;
    Label5: TLabel;
    Label6: TLabel;
    Image1: TImage;
    procedure btnFinishClick(Sender: TObject);
    procedure fldChanging(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure btnConfigureClick(Sender: TObject);
    procedure DosCommand1Terminated(Sender: TObject);
    procedure btnBrowseClick(Sender: TObject);
  private
    { Private declarations }
    InstallInfo: TInstallInfo;
  public
    { Public declarations }
  end;

  function ShowConfigAPIForm(const aInstallInfo: TInstallInfo): TResultStatus;


implementation
uses
  System.IOUtils,
  Vcl.FileCtrl;
{$R *.dfm}

function ShowConfigAPIForm(const aInstallInfo: TInstallInfo): TResultStatus;
begin
  result := rsFinished;
  with TfrmConfigAPI.Create(nil) do
    try
      InstallInfo := aInstallInfo;
      fldSolutionLocation.Text := InstallInfo.Path;
      ShowModal;
    finally
      DisposeOf;
    end;
end;


procedure TfrmConfigAPI.btnFinishClick(Sender: TObject);
begin
    close;
end;

procedure TfrmConfigAPI.btnBrowseClick(Sender: TObject);
var
  folder: string;
begin
  folder := fldSolutionLocation.Text;
  if Vcl.FileCtrl.SelectDirectory('Select Solution Location', '', folder, [sdNewUI, sdNewFolder], Self) then
  begin
    fldSolutionLocation.Text := folder;
    fldSolutionLocation.OnChange(fldSolutionLocation);
  end;
end;

procedure TfrmConfigAPI.btnConfigureClick(Sender: TObject);

  procedure MakeBat;
  var
    lBatFile: TStringlist;
    lCommandLine: string;
  begin
    lBatFile := TStringlist.Create;
    lBatFile.Add('@echo off');
    lBatFile.Add(format('cd "%s"',[InstallInfo.Path]));
    lCommandLine := format('%s %s --key=%s --dir="%s"',
      ['exercism.exe', 'configure', fldAPI.Text, fldSolutionLocation.Text]);
    lBatFile.Add(lCommandLine);
    lBatFile.Add('exit');
    lBatFile.SaveToFile(TPath.Combine(InstallInfo.Path,'config.bat'));
    lBatFile.DisposeOf;
  end;

var
  lCommandLine: string;
begin
  MakeBat;
  btnConfigure.Enabled := false;
  DosCommand1.CurrentDir := InstallInfo.Path;
  lCommandLine := TPath.Combine(InstallInfo.Path,'config.bat');
  DosCommand1.CommandLine := lCommandLine;
  DosCommand1.Execute;
end;

procedure TfrmConfigAPI.DosCommand1Terminated(Sender: TObject);
begin
  mConfigure.Lines := DosCommand1.Lines;
  btnFinish.Enabled := true;
  Deletefile(TPath.Combine(InstallInfo.Path,'config.bat'));
end;

procedure TfrmConfigAPI.fldChanging(Sender: TObject);
var
  lAPI, lLocation: string;
begin
  lAPI := fldAPI.Text;
  lLocation := fldSolutionLocation.Text;
  btnConfigure.Enabled := not (lAPI.IsEmpty or lLocation.IsEmpty);;
end;

procedure TfrmConfigAPI.FormCreate(Sender: TObject);
begin
  SetWindowLong(Handle, GWL_EXSTYLE, WS_EX_APPWINDOW);
end;

end.
