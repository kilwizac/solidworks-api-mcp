---
type: method
interface: IFeatureManager
member: InsertSplitLineIntersect
returns: Feature
parameters:
  -
    name: CompleteOption
    type: System.Int32
    description: 1 = Linear 7 = Natural 9 = Split all and linear 15 = Split all and natural
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IModelDoc2.InsertSplitLineProject
  - IModelDoc2.InsertSplitLineSil
  - ISplitLineFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - split
  - lines
  - splitlinefeaturedata
  - isplitlinefeaturedata
  - insertsplitlineintersect
  - ifeaturemanager
  - manager
  - insert
  - line
  - intersect
  - complete
  - option
  - int32
---

# IFeatureManager.InsertSplitLineIntersect

Creates split lines using the selected intersecting tool and target entities.

## Signature

```csharp
Feature InsertSplitLineIntersect( 
   System.Int32
CompleteOption
)
```
## Parameters

- `CompleteOption` (System.Int32): 1 = Linear 7 = Natural 9 = Split all and linear 15 = Split all and natural

## Return Value

Pointer to the IFeature object

## See Also

- `IModelDoc2.InsertSplitLineProject`
- `IModelDoc2.InsertSplitLineSil`
- `ISplitLineFeatureData`