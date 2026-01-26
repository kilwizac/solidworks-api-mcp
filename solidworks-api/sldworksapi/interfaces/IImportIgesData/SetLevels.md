---
type: method
interface: IImportIgesData
member: SetLevels
returns: System.Boolean
parameters:
  -
    name: All
    type: System.Boolean
    description: True to process all IGES levels, false to not
  -
    name: Only
    type: System.Object
    description: If All is false, then specify either a long or integer, or an array of longs or integers, indicating the levels to process
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImportIgesData.IncludeAllLevels
  - IImportIgesData.IncludeOnlyLevels
  - IImportIgesData.ProcessByLevel
keywords:
  - setlevels
  - iimportigesdata
  - import
  - iges
  - data
  - levels
  - all
  - boolean
  - only
  - object
  - specify
  - values
  - file
  - vb
  - net
  - vba
---

# IImportIgesData.SetLevels

Sets the levels-related information for importing and IGES file.

## Signature

```csharp
System.Boolean SetLevels( 
   System.Boolean
All
,
   System.Object
Only
)
```
## Parameters

- `All` (System.Boolean): True to process all IGES levels, false to not
- `Only` (System.Object): If All is false, then specify either a long or integer, or an array of longs or integers, indicating the levels to process

## Return Value

True if the levels-related information is set, false if not

## Examples

- Specify IGES Levels and Values, Then Import IGES File (C#) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_CSharp.htm)
- Specify IGES Levels and Values, Then Import IGES File (VB.NET) (Specify_IGES_Levels_and_Values_Then_Import_IGES_File_Example_VBNET.htm)
- Specify IGES Levels and Values, Then Import IGES File (VBA) (Specify_IGES_Levels_and_Values,_Then_Import_IGES_File_Example_VB.htm)

## See Also

- `IImportIgesData.IncludeAllLevels`
- `IImportIgesData.IncludeOnlyLevels`
- `IImportIgesData.ProcessByLevel`