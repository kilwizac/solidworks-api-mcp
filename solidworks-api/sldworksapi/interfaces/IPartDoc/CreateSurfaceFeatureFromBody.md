---
type: method
interface: IPartDoc
member: CreateSurfaceFeatureFromBody
returns: System.Object
parameters:
  -
    name: Body
    type: System.Object
    description: Body from which to create surface feature
  -
    name: Options
    type: System.Int32
    description: Surface feature options as defined in swCreateFeatureBodyOpts_e
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
  - IPartDoc.ICreateFeatureFromBody4
  - IPartDoc.ICreateSurfaceFeatureFromBody
  - IPartDoc.ICreateSurfaceFeatureFromBodyCount2
keywords:
  - feature
  - see
  - also
  - ifeature
  - surface
  - isurface
  - createsurfacefeaturefrombody
  - ipartdoc
  - part
  - doc
  - create
  - body
  - object
  - options
  - int32
  - loft
  - change
  - vba
---

# IPartDoc.CreateSurfaceFeatureFromBody

Creates a surface feature from a body.

## Signature

```csharp
System.Object CreateSurfaceFeatureFromBody( 
   System.Object
Body
,
   System.Int32
Options
)
```
## Parameters

- `Body` (System.Object): Body from which to create surface feature
- `Options` (System.Int32): Surface feature options as defined in swCreateFeatureBodyOpts_e

## Return Value

Surface feature array

## Examples

- Create Loft Surface Body and Change Into Feature (VBA) (Create_Loft_Surface_Body_and_Change_Into_Feature_Example_VB.htm)

## See Also

- `IPartDoc.CreateFeatureFromBody3`
- `IPartDoc.ICreateFeatureFromBody4`
- `IPartDoc.ICreateSurfaceFeatureFromBody`
- `IPartDoc.ICreateSurfaceFeatureFromBodyCount2`