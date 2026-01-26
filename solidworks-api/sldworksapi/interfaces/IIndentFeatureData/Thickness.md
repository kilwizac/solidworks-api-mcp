---
type: property
interface: IIndentFeatureData
member: Thickness
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - thickness
  - iindentfeaturedata
  - indent
  - feature
  - data
  - double
  - insert
  - vb
  - net
  - vba
readonly: null
---

# IIndentFeatureData.Thickness

Gets or sets the thickness of the indent feature.

## Signature

```csharp
System.Double Thickness {get; set;}
```
## Parameters

None.

## Return Value

Thickness

## Remarks

This property applies to solid bodies only.
If
IIndentFeatureData::IsCut
is set
to true (i.e., remove the intersection area of the
target body),
then there is no
thickness.

## Examples

- Insert Indent Feature (C#) (Insert_Indent_Feature_Example_CSharp.htm)
- Insert Indent Feature (VB.NET) (Insert_Indent_Feature_Example_VBNET.htm)
- Insert Indent Feature (VBA) (Insert_Indent_Feature_Example_VB.htm)