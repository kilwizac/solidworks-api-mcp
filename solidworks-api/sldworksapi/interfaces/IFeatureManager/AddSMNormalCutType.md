---
type: method
interface: IFeatureManager
member: AddSMNormalCutType
returns: void
parameters:
  -
    name: AutoPropagation
    type: System.Boolean
    description: True to automatically propagate the Normal Cut, false to not
  -
    name: Optimize
    type: System.Boolean
    description: True to optimize geometry, false to not
  -
    name: BExtent
    type: System.Boolean
    description: True to maximize the cutout using the top and bottom intersection profiles, false to use an offset plane
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - ISMNormalCutFeatureData
keywords:
  - addsmnormalcuttype
  - ifeaturemanager
  - feature
  - manager
  - add
  - sm
  - normal
  - cut
  - type
  - auto
  - propagation
  - boolean
  - optimize
  - extent
  - void
---

# IFeatureManager.AddSMNormalCutType

Obsolete. See IFeatureManager::CreateFeature and the Remarks in ISMNormalCutGroupData, and ISMNormalCutFeatureData2.

## Signature

```csharp
void AddSMNormalCutType( 
   System.Boolean
AutoPropagation
,
   System.Boolean
Optimize
,
   System.Boolean
BExtent
)
```
## Parameters

- `AutoPropagation` (System.Boolean): True to automatically propagate the Normal Cut, false to not
- `Optimize` (System.Boolean): True to optimize geometry, false to not
- `BExtent` (System.Boolean): True to maximize the cutout using the top and bottom intersection profiles, false to use an offset plane

## Return Value

Unknown.

## Remarks

To create a Normal Cut feature in a sheet metal part, call:
IFeatureManager::AddSMNormalCut
.
IFeatureManager::AddSMNormalCutType.
IModelDocExtension::SelectByID2
with Mark = 1 to select the cut-extrude faces that you wish to make Normal Cuts.
IModelDocExtension::SelectByID2 with Mark = 2 to select the group of cut-extrude faces.
IModelDocExtension::SelectByID2 with Mark = 4 to select the offset plane, if BExtent is false.
(Optional) IModelDocExtension::SelectByID2 with Mark = 8 to select the direction of normal cut, if BExtent is true.
IFeatureManager::FinishSMNormalCut
.
ISMNormalCutFeatureData::Offset
to change the profile of the Normal Cut.

## See Also

- `ISMNormalCutFeatureData`