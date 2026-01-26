---
type: method
interface: IFeatureManager
member: InsertWrapFeature
returns: Feature
parameters:
  -
    name: Type
    type: System.Int32
    description: Type of wrap as defined in swWrapSketchType_e
  -
    name: Thickness
    type: System.Double
    description: Thickness; 0.00001 (thinnest) - 10000 (thickest)
  -
    name: ReverseDir
    type: System.Boolean
    description: True to reverse the direction of the wrap, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IWrapSketchFeatureData
keywords:
  - insertwrapfeature
  - ifeaturemanager
  - feature
  - manager
  - insert
  - wrap
  - type
  - int32
  - thickness
  - double
  - reverse
  - dir
  - boolean
  - change
  - face
  - vb
  - net
  - vba
---

# IFeatureManager.InsertWrapFeature

Obsolete. Superseded by IFeatureManager::InsertWrapFeature2.

## Signature

```csharp
Feature InsertWrapFeature( 
   System.Int32
Type
,
   System.Double
Thickness
,
   System.Boolean
ReverseDir
)
```
## Parameters

- `Type` (System.Int32): Type of wrap as defined in swWrapSketchType_e
- `Thickness` (System.Double): Thickness; 0.00001 (thinnest) - 10000 (thickest)
- `ReverseDir` (System.Boolean): True to reverse the direction of the wrap, false to not

## Return Value

Wrap feature

## Remarks

Use
IModelDocExtension::SelectByID2
and these values to mark these selections:
1 = Face on which to place the wrap feature
2 = Pull direction if Type is swWrapSketchType_e.swWrapSketchType_Emboss or swWrapSketchType_e.swWrapSketchType_Engrave
4 = 2D sketch of wrap feature; 3D sketches are invalid

## Examples

- Change Wrap Feature Face (C#) (Change_Wrap_Feature_Face_Example_CSharp.htm)
- Change Wrap Feature Face (VB.NET) (Change_Wrap_Feature_Face_Example_VBNET.htm)
- Change Wrap Feature Face (VBA) (Change_Wrap_Feature_Face_Example_VB.htm)

## See Also

- `IWrapSketchFeatureData`