---
type: method
interface: IFeatureManager
member: InsertMoldPartingLine
returns: Feature
parameters:
  -
    name: BFlipDir
    type: System.Boolean
    description: True to flip the direction of the pull, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IFeatureManager.InsertMoldCoreCavitySolids
  - IFeatureManager.InsertMoldShutOffSurface
  - IPartingLineFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - parting
  - line
  - mold
  - tools
  - lines
  - ipartinglinefeaturedata
  - features
  - insertmoldpartingline
  - ifeaturemanager
  - manager
  - insert
  - flip
  - dir
  - boolean
---

# IFeatureManager.InsertMoldPartingLine

Inserts a mold parting line feature.

## Signature

```csharp
Feature InsertMoldPartingLine( 
   System.Boolean
BFlipDir
)
```
## Parameters

- `BFlipDir` (System.Boolean): True to flip the direction of the pull, false to not

## Return Value

Pointer to the IFeature object

## Remarks

Before calling this method, you must select the direction of pull and the edges for the parting line by calling
IModelDocExtension::SelectByID2
with the following Marks:
Selection
Mark
Direction of pull
1
Parting line edges
4

## See Also

- `IFeatureManager.InsertMoldCoreCavitySolids`
- `IFeatureManager.InsertMoldShutOffSurface`
- `IPartingLineFeatureData`