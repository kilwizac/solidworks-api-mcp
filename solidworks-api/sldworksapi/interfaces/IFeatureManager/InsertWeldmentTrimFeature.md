---
type: method
interface: IFeatureManager
member: InsertWeldmentTrimFeature
returns: Feature
parameters:
  -
    name: EndCond
    type: System.Int32
    description: End condition as defined by swSolidworksWeldmentEndCondOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertWeldmentTrimFeature2
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
  - insertweldmenttrimfeature
  - ifeaturemanager
  - manager
  - insert
  - end
  - cond
  - int32
---

# IFeatureManager.InsertWeldmentTrimFeature

Inserts a weldment trim feature.

## Signature

```csharp
Feature InsertWeldmentTrimFeature( 
   System.Int32
EndCond
)
```
## Parameters

- `EndCond` (System.Int32): End condition as defined by swSolidworksWeldmentEndCondOptions_e

## Return Value

Pointer to the IFeature object

## Remarks

Use
IModelDocExtension::SelectByID2
and specify the following marks to select the body, or bodies, to trim and the trimming boundaries:
1 = Body or bodies to trim
2 = Trimming boundaries (body or face)

## See Also

- `IFeatureManager.InsertWeldmentTrimFeature2`
- `IWeldmentTrimExtendFeatureData`