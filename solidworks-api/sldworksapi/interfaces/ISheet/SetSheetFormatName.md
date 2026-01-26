---
type: method
interface: ISheet
member: SetSheetFormatName
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the sheet format
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetName
  - ISheet.GetSheetFormatName
  - ISheet.GetTemplateName
  - ISheet.SetName
  - ISheet.SetTemplateName
  - ISheet.SheetFormatVisible
keywords:
  - name
  - sheet
  - format
  - see
  - also
  - isheet
  - names
  - setsheetformatname
  - string
  - boolean
---

# ISheet.SetSheetFormatName

Sets the name of the sheet format of this drawing sheet, as displayed in the FeatureManager design tree.

## Signature

```csharp
System.Boolean SetSheetFormatName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the sheet format

## Return Value

True if the name of the sheet format is set, false if not

## Remarks

The name that you specify must:
be unique in the FeatureManager design tree.
Not contain any of the SOLIDWORKS reserved special characters.
If either of these conditions is not met, then this method returns false, and the name is not changed. If this sheet does not have a sheet format, this method has no effect.

## See Also

- `ISheet.GetName`
- `ISheet.GetSheetFormatName`
- `ISheet.GetTemplateName`
- `ISheet.SetName`
- `ISheet.SetTemplateName`
- `ISheet.SheetFormatVisible`