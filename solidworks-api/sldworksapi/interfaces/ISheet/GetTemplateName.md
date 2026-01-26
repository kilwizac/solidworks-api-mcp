---
type: method
interface: ISheet
member: GetTemplateName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetProperties
  - ISheet.GetTemplateSketch
  - ISheet.IGetProperties
  - ISheet.SetProperties
  - ISheet.SetTemplateName
keywords:
  - sheet
  - see
  - also
  - isheet
  - template
  - names
  - name
  - gettemplatename
  - string
  - drawing
  - vba
  - modify
  - reload
  - format
  - vb
  - net
---

# ISheet.GetTemplateName

Gets the name of the template used by this sheet.

## Signature

```csharp
System.String GetTemplateName()
```
## Parameters

None.

## Return Value

Template path name

## Remarks

To ensure a correct return value, open the document in edit mode.
If the sheet does not use a template, i.e., uses a custom layout, this method returns "
*.drt
".

## Examples

- Get Name of Drawing Sheet Template (VBA) (Get_Name_and_Properties_of_Drawing_Sheet_Template_Example_VB.htm)
- Modify and Reload Sheet Format Template (C#) (Modify_and_Reload_Sheet_Format_Template_Example_CSharp.htm)
- Modify and Reload Sheet Format Template (VB.NET) (Modify_and_Reload_Sheet_Format_Template_Example_VBNET.htm)
- Modify and Reload Sheet Format Template (VBA) (Modify_and_Reload_Sheet_Format_Template_Example_VB.htm)

## See Also

- `ISheet.GetProperties`
- `ISheet.GetTemplateSketch`
- `ISheet.IGetProperties`
- `ISheet.SetProperties`
- `ISheet.SetTemplateName`