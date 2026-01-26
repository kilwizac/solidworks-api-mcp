---
type: method
interface: IFeatureManager
member: InsertWeldmentTrimFeature2
returns: Feature
parameters:
  -
    name: EndCond
    type: System.Int32
    description: End condition as defined by swSolidworksWeldmentEndCondOptions_e
  -
    name: Options
    type: System.Int32
    description: Logical sum of values as defined in swWeldmentTrimExtendOptionType_e (see Remarks )
  -
    name: GapValue
    type: System.Double
    description: Length to trim (see Remarks )
  -
    name: BodiesToTrim
    type: System.Object
    description: Array of bodies to trim
  -
    name: BodiesOrFaces
    type: System.Object
    description: Array of bodies or faces that define the trimming boundaries
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertWeldmentTrimFeature
  - IWeldmentTrimExtendFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - weldment
  - trim
  - weldments
  - extend
  - insertweldmenttrimfeature2
  - ifeaturemanager
  - manager
  - insert
  - feature2
  - end
  - cond
  - int32
  - options
  - gap
  - value
  - double
  - bodies
  - object
  - faces
  - features
  - vba
  - vb
  - net
---

# IFeatureManager.InsertWeldmentTrimFeature2

Inserts a weldment trim feature for the specified weldment bodies or faces.

## Signature

```csharp
Feature InsertWeldmentTrimFeature2( 
   System.Int32
EndCond
,
   System.Int32
Options
,
   System.Double
GapValue
,
   System.Object
BodiesToTrim
,
   System.Object
BodiesOrFaces
)
```
## Parameters

- `EndCond` (System.Int32): End condition as defined by swSolidworksWeldmentEndCondOptions_e
- `Options` (System.Int32): Logical sum of values as defined in swWeldmentTrimExtendOptionType_e (see Remarks )
- `GapValue` (System.Double): Length to trim (see Remarks )
- `BodiesToTrim` (System.Object): Array of bodies to trim
- `BodiesOrFaces` (System.Object): Array of bodies or faces that define the trimming boundaries

## Return Value

IFeature

## Remarks

Use
IModelDocExtension::SelectByID2
and specify the following marks to select the body, or bodies, to trim and the trimming boundaries:
1 = Body or bodies to trim
2 = Trimming boundaries (body or face)
If you include swWeldmentTrimExtendOption_WeldGap in the Options parameter, then the GapValue parameter is used. Specify 0 for GapValue to ensure that there is no weld gap.
If you exclude swWeldmentTrimExtendOption_WeldGap from the Options parameter, then the weld gap defaults to the last value specified in the SOLIDWORKS Design user-interface.

## Examples

- Insert Weldment Features (VBA) (Insert_Weldment_Features_Example_VB.htm)
- Insert Weldment Features (VB.NET) (Insert_Weldment_Features_Example_VBNET.htm)
- Insert Weldment Features (C#) (Insert_Weldment_Features_Example_CSharp.htm)

## See Also

- `IFeatureManager.InsertWeldmentTrimFeature`
- `IWeldmentTrimExtendFeatureData`