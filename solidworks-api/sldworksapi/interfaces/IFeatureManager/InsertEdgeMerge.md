---
type: method
interface: IFeatureManager
member: InsertEdgeMerge
returns: Feature
parameters:
  -
    name: Angular_tolerance
    type: System.Double
    description: Angular tolerance
  -
    name: Edge_length_tolerance
    type: System.Double
    description: Edge length tolerance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - merge
  - edges
  - insertedgemerge
  - ifeaturemanager
  - feature
  - manager
  - insert
  - edge
  - angular
  - tolerance
  - double
  - length
---

# IFeatureManager.InsertEdgeMerge

Merges multiple edges into a single edge using the selected faces when importing data.

## Signature

```csharp
Feature InsertEdgeMerge( 
   System.Double
Angular_tolerance
,
   System.Double
Edge_length_tolerance
)
```
## Parameters

- `Angular_tolerance` (System.Double): Angular tolerance
- `Edge_length_tolerance` (System.Double): Edge length tolerance

## Return Value

Pointer to the IFeature object