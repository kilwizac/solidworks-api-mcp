---
type: method
interface: IFeatureManager
member: InsertGridFeature
returns: Feature
parameters:
  -
    name: HeightDoubles
    type: System.Object
    description: Array of doubles specifying distances between Grid System levels
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - grid
  - insertgridfeature
  - ifeaturemanager
  - manager
  - insert
  - height
  - doubles
  - object
  - vb
  - net
  - vba
---

# IFeatureManager.InsertGridFeature

Inserts a Grid System feature.

## Signature

```csharp
Feature InsertGridFeature( 
   System.Object
HeightDoubles
)
```
## Parameters

- `HeightDoubles` (System.Object): Array of doubles specifying distances between Grid System levels

## Return Value

IFeature

## Remarks

The number of elements in HeightDoubles determines the number of levels in this Grid System feature.

## Examples

- Insert Grid System Feature (C#) (Insert_Grid_System_Feature_Example_CSharp.htm)
- Insert Grid System Feature (VB.NET) (Insert_Grid_System_Feature_Example_VBNET.htm)
- Insert Grid System Feature (VBA) (Insert_Grid_System_Feature_Example_VB.htm)