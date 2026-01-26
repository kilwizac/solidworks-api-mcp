---
type: method
interface: ISldWorks
member: RunMacro
returns: System.Boolean
parameters:
  -
    name: FilePathName
    type: System.String
    description: Path and file name of the project file containing the macro
  -
    name: ModuleName
    type: System.String
    description: Name of the module in the macro
  -
    name: ProcedureName
    type: System.String
    description: Name of the procedure in the module
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.GetCurrentMacroPathFolder
  - ISldWorks.GetCurrentMacroPathName
  - ISldWorks.GetMacroMethods
  - ISldWorks.RecordLine
keywords:
  - runmacro
  - isldworks
  - sld
  - works
  - run
  - macro
  - file
  - path
  - name
  - string
  - module
  - procedure
  - boolean
  - vba
---

# ISldWorks.RunMacro

Obsolete. Superseded by ISldWorks::RunMacro2.

## Signature

```csharp
System.Boolean RunMacro( 
   System.String
FilePathName
,
   System.String
ModuleName
,
   System.String
ProcedureName
)
```
## Parameters

- `FilePathName` (System.String): Path and file name of the project file containing the macro
- `ModuleName` (System.String): Name of the module in the macro
- `ProcedureName` (System.String): Name of the procedure in the module

## Return Value

True if macro runs successfully, false if not

## Remarks

See
SOLIDWORKS Macros
for details.

## Examples

- Run Macro (VBA) (Run_Macro_VB.htm)

## See Also

- `ISldWorks.GetCurrentMacroPathFolder`
- `ISldWorks.GetCurrentMacroPathName`
- `ISldWorks.GetMacroMethods`
- `ISldWorks.RecordLine`