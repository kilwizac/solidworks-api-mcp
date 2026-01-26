---
type: property
interface: IExplodeStep
member: AutoSpaceComponentsOnDrag
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - autospacecomponentsondrag
  - iexplodestep
  - explode
  - step
  - auto
  - space
  - components
  - drag
  - boolean
readonly: null
---

# IExplodeStep.AutoSpaceComponentsOnDrag

Gets or sets whether to automatically space a group of components equally along an axis as you drag them.

## Signature

```csharp
System.Boolean AutoSpaceComponentsOnDrag {get; set;}
```
## Parameters

None.

## Return Value

True to automatically space components equally along an axis as you drag them, false to not (see Remarks )

## Remarks

If this property is set to true, then, by default,
IExplodeStep::RotateAboutEachComponentOrigin
is false and
IExplodeStep::RotationAngle
is 0.0.
If you set this property to false during editing of this step, then you must re-set the values for IExplodeStep::RotateAboutEachComponentOrigin and IExplodeStep::RotationAngle.