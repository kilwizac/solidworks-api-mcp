---
type: method
interface: IFeatureManager
member: InsertEndCapFeature
returns: Feature
parameters:
  -
    name: Depth
    type: System.Double
    description: Thickness of the end cap
  -
    name: BIsGivenOffset
    type: System.Boolean
    description: True to provide an offset value, false to provide a thickness ratio
  -
    name: BIsChamfer
    type: System.Boolean
    description: True if end cap feature is chamfered, false if end cap is filleted
  -
    name: OffsetValue
    type: System.Double
    description: Edge offset value; valid only if BIsGivenOffset is true
  -
    name: WallThicknessRatio
    type: System.Double
    description: Wall thickness ratio; valid only if BIsGivenOffset is false
  -
    name: ChamferValue
    type: System.Double
    description: Chamfer distance if BIsChamfer is true, fillet radius if BIsChamfer is false
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertendcapfeature
  - ifeaturemanager
  - feature
  - manager
  - insert
  - end
  - cap
  - depth
  - double
  - given
  - offset
  - boolean
  - chamfer
  - value
  - wall
  - thickness
  - ratio
---

# IFeatureManager.InsertEndCapFeature

Obsolete. Superseded by IFeatureManager::InsertEndCapFeature3.

## Signature

```csharp
Feature InsertEndCapFeature( 
   System.Double
Depth
,
   System.Boolean
BIsGivenOffset
,
   System.Boolean
BIsChamfer
,
   System.Double
OffsetValue
,
   System.Double
WallThicknessRatio
,
   System.Double
ChamferValue
)
```
## Parameters

- `Depth` (System.Double): Thickness of the end cap
- `BIsGivenOffset` (System.Boolean): True to provide an offset value, false to provide a thickness ratio
- `BIsChamfer` (System.Boolean): True if end cap feature is chamfered, false if end cap is filleted
- `OffsetValue` (System.Double): Edge offset value; valid only if BIsGivenOffset is true
- `WallThicknessRatio` (System.Double): Wall thickness ratio; valid only if BIsGivenOffset is false
- `ChamferValue` (System.Double): Chamfer distance if BIsChamfer is true, fillet radius if BIsChamfer is false

## Return Value

IFeature