---
type: method
interface: IPartDoc
member: ICreateFeatureFromBody4
returns: Feature
parameters:
  -
    name: Body
    type: Body2
    description: Temporary body
  -
    name: MakeRefSurface
    type: System.Boolean
    description: If the body cannot be knit to a solid or if a solid body already exists in this model, then True creates of a reference surface feature
  -
    name: Options
    type: System.Int32
    description: Option as defined by swCreateFeatureBodyOpts_e
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
keywords:
  - temporary
  - bodies
  - feature
  - see
  - also
  - ifeature
  - imported
  - icreatefeaturefrombody4
  - ipartdoc
  - part
  - doc
  - create
  - body4
  - body
  - body2
  - make
  - ref
  - surface
  - boolean
  - options
  - int32
---

# IPartDoc.ICreateFeatureFromBody4

Creates a new imported feature from the specified temporary body.

## Signature

```csharp
Feature ICreateFeatureFromBody4( 
   Body2
Body
,
   System.Boolean
MakeRefSurface
,
   System.Int32
Options
)
```
## Parameters

- `Body` (Body2): Temporary body
- `MakeRefSurface` (System.Boolean): If the body cannot be knit to a solid or if a solid body already exists in this model, then True creates of a reference surface feature
- `Options` (System.Int32): Option as defined by swCreateFeatureBodyOpts_e

## Return Value

Newly created imported feature or NULL if the operation fails

## Remarks

This method:
Is intended as the final call in a knitting operation. The body that results from your knitting efforts can be converted into an imported body feature in the SOLIDWORKS model.
Is not limited to
IBody2
objects obtained from knitting operations.
Allows the application to decide how much additional work must be done to the model before creating the feature. The options listed in the swCreateFeatureBodyOpts_e enumeration can be OR'd together to provide additional checking or simplification of the model. If you specify swCreateFeatureBodySimplify for Options, then swCreateFeatureBodyCheck is implied.
If the application passes 0 for the options argument, then the options are disabled and the model is passed without any checking. It is up to the application to ensure that the model is a valid model.
If this method fails, the error might be caused by creating a sheet (surface) body from a multiple shells body. If so, replace this method with
IPartDoc::CreateSurfaceFeatureFromBody
and
IPartDoc::ICreateSurfaceFeatureFromBodyCount2
.

## See Also

- `IPartDoc.CreateFeatureFromBody3`