---
type: method
interface: ISldWorks
member: GetMacroMethods
returns: System.Object
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and macro filename whose module names you want
  -
    name: Filter
    type: System.Int32
    description: Filter as defined in swMacroMethods_e
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
  - ISldWorks.GetCurrentWorkingDirectory
  - ISldWorks.RunMacro
keywords:
  - macros
  - modules
  - getmacromethods
  - isldworks
  - sld
  - works
  - macro
  - methods
  - file
  - path
  - name
  - string
  - filter
  - int32
  - object
---

# ISldWorks.GetMacroMethods

Gets the names of the modules in the specified macro.

## Signature

```csharp
System.Object GetMacroMethods( 
   System.String
FilePathName
,
   System.Int32
Filter
)
```
## Parameters

- `FilePathName` (System.String): Path and macro filename whose module names you want
- `Filter` (System.Int32): Filter as defined in swMacroMethods_e

## Return Value

Array of names of the modules in FilePathName

## See Also

- `ISldWorks.GetCurrentMacroPathFolder`
- `ISldWorks.GetCurrentMacroPathName`
- `ISldWorks.GetCurrentWorkingDirectory`
- `ISldWorks.RunMacro`