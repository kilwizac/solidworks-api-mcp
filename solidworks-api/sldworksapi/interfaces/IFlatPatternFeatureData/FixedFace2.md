---
type: property
interface: IFlatPatternFeatureData
member: FixedFace2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - face
  - see
  - also
  - iface2
  - flat
  - pattern
  - features
  - fixedface2
  - iflatpatternfeaturedata
  - feature
  - data
  - fixed
  - face2
  - object
  - vba
  - vb
  - net
readonly: null
---

# IFlatPatternFeatureData.FixedFace2

Gets or sets the fixed face of this Flat-Pattern feature.

## Signature

```csharp
System.Object FixedFace2 {get; set;}
```
## Parameters

None.

## Return Value

Fixed face (or edge for cylindrical sheet metal parts)

## Remarks

The difference between this method and the now obsolete IFlatPatternFeatureData::FixedFace is that this method successfully returns the fixed face of a Flat-Pattern feature in a sheet metal part created in any version of SOLIDWORKS.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Get Fixed Face of Flat-Pattern Feature (VBA) (Get_Fixed_Face_of_Flat-Pattern_Feature_Example_VB.htm)
- Get Fixed Face of Flat-Pattern Feature (VB.NET) (Get_Fixed_Face_of_Flat-Pattern_Feature_Example_VBNET.htm)
- Get Fixed Face of Flat-Pattern Feature (C#) (Get_Fixed_Face_of_Flat-Pattern_Feature_Example_CSharp.htm)