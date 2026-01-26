---
type: method
interface: IPartDoc
member: ICreateSurfaceFeatureFromBodyCount2
returns: System.Int32
parameters:
  -
    name: Body
    type: Body2
    description: Body from which to create surface features
  -
    name: Options
    type: System.Int32
    description: Options as defined in swCreateFeatureBodyOpts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - geometry
  - parts
  - ui
related:
  - IPartDoc.CreateFeatureFromBody3
  - IPartDoc.CreateSurfaceFeatureFromBody
  - IPartDoc.ICreateFeatureFromBody4
  - IPartDoc.ICreateSurfaceFeatureFromBody
keywords:
  - feature
  - see
  - also
  - ifeature
  - surface
  - isurface
  - icreatesurfacefeaturefrombodycount2
  - ipartdoc
  - part
  - doc
  - create
  - body
  - count2
  - body2
  - options
  - int32
---

# IPartDoc.ICreateSurfaceFeatureFromBodyCount2

Gets the number of surface features to create from the body.

## Signature

```csharp
System.Int32 ICreateSurfaceFeatureFromBodyCount2( 
   Body2
Body
,
   System.Int32
Options
)
```
## Parameters

- `Body` (Body2): Body from which to create surface features
- `Options` (System.Int32): Options as defined in swCreateFeatureBodyOpts_e

## Return Value

Number of surface features to create from the body

## See Also

- `IPartDoc.CreateFeatureFromBody3`
- `IPartDoc.CreateSurfaceFeatureFromBody`
- `IPartDoc.ICreateFeatureFromBody4`
- `IPartDoc.ICreateSurfaceFeatureFromBody`