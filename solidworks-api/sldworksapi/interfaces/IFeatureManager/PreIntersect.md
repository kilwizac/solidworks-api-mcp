---
type: method
interface: IFeatureManager
member: PreIntersect
returns: System.Object
parameters:
  -
    name: CapPlanar
    type: System.Boolean
    description: True to cap the flat openings of surfaces to define closed volumes, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related:
  - IIntersectFeatureData
keywords:
  - preintersect
  - ifeaturemanager
  - feature
  - manager
  - pre
  - intersect
  - cap
  - planar
  - boolean
  - object
  - data
  - vba
  - vb
  - net
---

# IFeatureManager.PreIntersect

Obsolete. Superseded by IFeatureManager::PreIntersect2.

## Signature

```csharp
System.Object PreIntersect( 
   System.Boolean
CapPlanar
)
```
## Parameters

- `CapPlanar` (System.Boolean): True to cap the flat openings of surfaces to define closed volumes, false to not

## Return Value

Array of intersect bodies

## Remarks

Before calling this method, you must select the intersecting
surfaces
,
solids
, or
planes
that make up the intersect feature.
After calling this method, call
IFeatureManager::PostIntersect
to create the intersect feature.

## Examples

- Get Intersect Feature Data (VBA) (Get_Intersect_Feature_Data_Example_VB.htm)
- Get Intersect Feature Data (VB.NET) (Get_Intersect_Feature_Data_Example_VBNET.htm)
- Get Intersect Feature Data (C#) (Get_Intersect_Feature_Data_Example_CSharp.htm)

## See Also

- `IIntersectFeatureData`