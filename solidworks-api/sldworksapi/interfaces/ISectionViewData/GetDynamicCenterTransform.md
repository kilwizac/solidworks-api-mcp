---
type: method
interface: ISectionViewData
member: GetDynamicCenterTransform
returns: MathTransform
parameters:
  -
    name: Index
    type: System.Int32
    description: Section (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - getdynamiccentertransform
  - isectionviewdata
  - section
  - view
  - data
  - dynamic
  - center
  - transform
  - index
  - int32
  - math
  - vb
  - net
  - vba
---

# ISectionViewData.GetDynamicCenterTransform

Gets the translation between the center of the model and the plane in the specified section in this section view.

## Signature

```csharp
MathTransform GetDynamicCenterTransform( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Section (see Remarks )

## Return Value

Translation between the center of the model and the plane in the section specified for Index

## Remarks

This method is only valid for section views having more than one section. Specify:
1 for Section 1
2 for Section 2
3 for Section 3
If the section view contains only one section and you specify 1 for Index, then this method returns Nothing or null.

## Examples

- Get Section View Data (C#) (Get_Section_View_Data_Example_CSharp.htm)
- Get Section View Data (VB.NET) (Get_Section_View_Data_Example_VBNET.htm)
- Get Section View Data (VBA) (Get_Section_View_Data_Example_VB.htm)