---
type: method
interface: IFeatureManager
member: InsertScale
returns: Feature
parameters:
  -
    name: Type
    type: System.Int16
    description: Value as defined in swScaleType_e
  -
    name: Uniform
    type: System.Boolean
    description: True if scaling should be uniform, false if not
  -
    name: Xscale
    type: System.Double
    description: X direction scale factor
  -
    name: YScale
    type: System.Double
    description: Y direction scale factor; valid only if Uniform is false
  -
    name: ZScale
    type: System.Double
    description: Z direction scale factor; valid only if Uniform is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - scale
  - iscalefeaturedata
  - insertscale
  - ifeaturemanager
  - manager
  - insert
  - type
  - int16
  - uniform
  - boolean
  - xscale
  - double
  - vba
---

# IFeatureManager.InsertScale

Applies the specified scaling to either the current model or a selected graphic body.

## Signature

```csharp
Feature InsertScale( 
   System.Int16
Type
,
   System.Boolean
Uniform
,
   System.Double
Xscale
,
   System.Double
YScale
,
   System.Double
ZScale
)
```
## Parameters

- `Type` (System.Int16): Value as defined in swScaleType_e
- `Uniform` (System.Boolean): True if scaling should be uniform, false if not
- `Xscale` (System.Double): X direction scale factor
- `YScale` (System.Double): Y direction scale factor; valid only if Uniform is false
- `ZScale` (System.Double): Z direction scale factor; valid only if Uniform is false

## Return Value

IFeature if scaling the current model; Null or Nothing if scaling a selected graphic body

## Remarks

To scale a graphic body:
Select the graphic body in the Graphic Bodies folder of the FeatureManager design tree.
Call this method.
This method scales the selected graphic body up in the graphics view, but no scale feature is created.
If Uniform is...
Then the scaling factor is...
True
Xscale, applied in three directions.
False
All three scaling factors (Xscale, YScale, and ZScale).
Use
IFeature::GetDefinition
and
IFeature::IGetDefinition
and
IFeature::ModifyDefinition
and
IFeature::IModifyDefinition2
to gain access to the
IScaleFeatureData
object.

## Examples

- Insert Scale Feature (VBA) (Insert_Scale_Feature_Example_VB.htm)

## See Also

- `IScaleFeatureData`