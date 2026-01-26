---
type: method
interface: ISheet
member: SetTemplateName
returns: void
parameters:
  -
    name: NameIn
    type: System.String
    description: Path name of the sheet format template
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - ISheet.GetProperties
  - ISheet.GetTemplateName
  - ISheet.GetTemplateSketch
  - ISheet.IGetProperties
keywords:
  - sheet
  - see
  - also
  - isheet
  - template
  - names
  - name
  - settemplatename
  - string
  - void
  - whether
  - hide
  - cutting
  - line
  - shoulders
  - vb
  - net
  - vba
---

# ISheet.SetTemplateName

Sets the template name for the sheet format.

## Signature

```csharp
void SetTemplateName( 
   System.String
NameIn
)
```
## Parameters

- `NameIn` (System.String): Path name of the sheet format template

## Return Value

Unknown.

## Remarks

If you want to use:
a custom template name, before calling this method, call
ISheet::SetProperties
and specify swDwgTemplates_e.swDwgTemplateCustom for the Templ parameter.
one of the standard templates provided by SOLIDWORKS, then there is no need to call ISheet::SetTemplateName. Instead, call ISheet::SetProperties and specify the appropriate enumerator for the Templ parameter.

## Examples

- Get and Set Whether to Hide Cutting Line Shoulders (C#) (Get_and_Set_Whether_to_Hide_Cutting_Line_Shoulders_Example_CSharp.htm)
- Get and Set Whether to Hide Cutting Line Shoulders (VB.NET) (Get_and_Set_Whether_to_Hide_Cutting_Line_Shoulders_Example_VBNET.htm)
- Get and Set Whether to Hide Cutting Line Shoulders (VBA) (Get_and_Set_Whether_to_Hide_Cutting_Line_Shoulders_Example_VB.htm)

## See Also

- `ISheet.GetProperties`
- `ISheet.GetTemplateName`
- `ISheet.GetTemplateSketch`
- `ISheet.IGetProperties`