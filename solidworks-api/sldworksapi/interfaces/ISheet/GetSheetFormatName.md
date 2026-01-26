---
type: method
interface: ISheet
member: GetSheetFormatName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetName
  - ISheet.GetTemplateName
  - ISheet.SetName
  - ISheet.SetSheetFormatName
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
  - getsheetformatname
  - string
---

# ISheet.GetSheetFormatName

Gets the name of the sheet format of this drawing sheet, as displayed in the FeatureManager design tree.

## Signature

```csharp
System.String GetSheetFormatName()
```
## Parameters

None.

## Return Value

Name of the sheet format

## Remarks

If the sheet does not have a sheet format, an empty string is returned.

## See Also

- `ISheet.GetName`
- `ISheet.GetTemplateName`
- `ISheet.SetName`
- `ISheet.SetSheetFormatName`
- `ISheet.SetTemplateName`
- `ISheet.SheetFormatVisible`