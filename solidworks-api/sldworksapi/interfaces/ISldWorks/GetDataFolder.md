---
type: method
interface: ISldWorks
member: GetDataFolder
returns: System.String
parameters:
  -
    name: BShowErrorMsg
    type: System.Boolean
    description: True to show any error messages in a dialog or false to avoid these dialogs (that is, data directory could not be found messages)
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetCurrentWorkingDirectory
  - ISldWorks.GetExecutablePath
  - ISldWorks.GetSearchFolders
  - ISldWorks.SetCurrentWorkingDirectory
keywords:
  - macros
  - data
  - solidworks
  - folder
  - getdatafolder
  - isldworks
  - sld
  - works
  - show
  - error
  - msg
  - boolean
  - string
---

# ISldWorks.GetDataFolder

Gets the data directory name currently used by SOLIDWORKS Design.

## Signature

```csharp
System.String GetDataFolder( 
   System.Boolean
BShowErrorMsg
)
```
## Parameters

- `BShowErrorMsg` (System.Boolean): True to show any error messages in a dialog or false to avoid these dialogs (that is, data directory could not be found messages)

## Return Value

Data directory currently used by the SOLIDWORKS Design application

## See Also

- `ISldWorks.GetCurrentWorkingDirectory`
- `ISldWorks.GetExecutablePath`
- `ISldWorks.GetSearchFolders`
- `ISldWorks.SetCurrentWorkingDirectory`