---
type: method
interface: IFeatureManager
member: GetPreTrimmedBodies
returns: System.Object
parameters:
  -
    name: TargetSurface
    type: Body2
    description: Target sheet body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.PostTrimSurface
keywords:
  - trim
  - surfaces
  - surface
  - see
  - also
  - isurface
  - getpretrimmedbodies
  - ifeaturemanager
  - feature
  - manager
  - pre
  - trimmed
  - bodies
  - target
  - body2
  - object
---

# IFeatureManager.GetPreTrimmedBodies

Gets the temporary trimmed bodies using the specified target sheet (surface) body according to the trim tools previously defined by IFeatureManager::PreTrimSurface.

## Signature

```csharp
System.Object GetPreTrimmedBodies( 
   Body2
TargetSurface
)
```
## Parameters

- `TargetSurface` (Body2): Target sheet body

## Return Value

Array of temporary trimmed bodies

## See Also

- `IFeatureManager.PostTrimSurface`