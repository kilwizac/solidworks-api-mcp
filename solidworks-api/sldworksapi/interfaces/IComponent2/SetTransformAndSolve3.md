---
type: method
interface: IComponent2
member: SetTransformAndSolve3
returns: System.Boolean
parameters:
  -
    name: XformIn
    type: MathTransform
    description: Pointer to the IMathTransform object to use to set and solve
  -
    name: ThisConfiguration
    type: System.Boolean
    description: True to transform this configuration, false to transform all configurations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetSpecificTransform
  - IComponent2.GetTotalTransform
  - IComponent2.Transform2
keywords:
  - components
  - see
  - also
  - icomponent2
  - transform
  - settransformandsolve3
  - component2
  - solve3
  - xform
  - math
  - configuration
  - boolean
---

# IComponent2.SetTransformAndSolve3

Sets the transform and solves for the mates for this component.

## Signature

```csharp
System.Boolean SetTransformAndSolve3( 
   MathTransform
XformIn
,
   System.Boolean
ThisConfiguration
)
```
## Parameters

- `XformIn` (MathTransform): Pointer to the IMathTransform object to use to set and solve
- `ThisConfiguration` (System.Boolean): True to transform this configuration, false to transform all configurations

## Return Value

True if the transform was set and solved, false if not

## Remarks

If making multiple calls to this method, consider using
IDragOperator::Drag
, which is more efficient because it reuses the solver. However, DragOperator::Drag does not support clash detection or dynamic clearance.
The transform specified must be in relation to the root component. See
IConfiguration::GetRootComponent
or
IConfiguration::IGetRootComponent2
.
SOLIDWORKS moves the destination component, or any component above it in the assembly tree, so that the destination component's transform is set to the desired one. Transforming an object using this method can cause SOLIDWORKS to transform other mated or constrained objects.
After you have changed a component's transform, you can call
IAssemblyDoc::UpdateBox
to avoid clipping in shaded display mode.

## See Also

- `IComponent2.GetSpecificTransform`
- `IComponent2.GetTotalTransform`
- `IComponent2.Transform2`