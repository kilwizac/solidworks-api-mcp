---
type: method
interface: ISldWorks
member: GetCurrentWorkingDirectory
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetCurrentMacroPathFolder
  - ISldWorks.GetCurrentMacroPathName
  - ISldWorks.GetExecutablePath
  - ISldWorks.SetCurrentWorkingDirectory
keywords:
  - external
  - references
  - file
  - management
  - solidworks
  - directory
  - getcurrentworkingdirectory
  - isldworks
  - sld
  - works
  - current
  - working
  - string
---

# ISldWorks.GetCurrentWorkingDirectory

Gets the current working directory being used by the SOLIDWORKS Design application.

## Signature

```csharp
System.String GetCurrentWorkingDirectory()
```
## Parameters

None.

## Return Value

Current working directory with trailing backslash

## Remarks

The current working directory is used when opening documents containing references. If explicit search folders are not set (see
ISldWorks::SetSearchFolders
), then the SOLIDWORKS Design application initially tries to locate file references (for example, assembly component parts) in the current working directory. Interactively, the current working directory is used by the
File Open
dialog and is set when you choose the
Open
dialog button.
The most current
ISldWorks::OpenDoc6
method does not set the current working directory. Therefore, you might want to set the current working directory programmatically (see
ISldWorks::SetCurrentWorkingDirectory
) before opening a file containing references. By doing this, your application behaves as if the file was opened interactively using the File Open dialog.
For more information on the search criteria used by the SOLIDWORKS Design application when loading file references, see SOLIDWORKS Design user-interface help.

## See Also

- `ISldWorks.GetCurrentMacroPathFolder`
- `ISldWorks.GetCurrentMacroPathName`
- `ISldWorks.GetExecutablePath`
- `ISldWorks.SetCurrentWorkingDirectory`