---
type: method
interface: IFeatureManager
member: PostIntersect
returns: Feature
parameters:
  -
    name: IntersectionsToExclude
    type: System.Object
    description: Array of booleans indicating which bodies returned by IFeatureManager::PreIntersect to exclude from this intersect feature
  -
    name: Merge
    type: System.Boolean
    description: True to merge all intersect regions into one body, false to not
  -
    name: Consume
    type: System.Boolean
    description: True to remove input surfaces from the FeatureManager design tree, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IIntersectFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - intersect
  - postintersect
  - ifeaturemanager
  - manager
  - post
  - intersections
  - exclude
  - object
  - merge
  - boolean
  - consume
  - data
  - vba
  - vb
  - net
---

# IFeatureManager.PostIntersect

Creates an intersect feature.

## Signature

```csharp
Feature PostIntersect( 
   System.Object
IntersectionsToExclude
,
   System.Boolean
Merge
,
   System.Boolean
Consume
)
```
## Parameters

- `IntersectionsToExclude` (System.Object): Array of booleans indicating which bodies returned by IFeatureManager::PreIntersect to exclude from this intersect feature
- `Merge` (System.Boolean): True to merge all intersect regions into one body, false to not
- `Consume` (System.Boolean): True to remove input surfaces from the FeatureManager design tree, false to not

## Return Value

IFeature

## Remarks

Before calling this method, you must call
IFeatureManager::PreIntersect
to obtain the intersect bodies.

## Examples

- Get Intersect Feature Data (VBA) (Get_Intersect_Feature_Data_Example_VB.htm)
- Get Intersect Feature Data (VB.NET) (Get_Intersect_Feature_Data_Example_VBNET.htm)
- Get Intersect Feature Data (C#) (Get_Intersect_Feature_Data_Example_CSharp.htm)

## See Also

- `IIntersectFeatureData`