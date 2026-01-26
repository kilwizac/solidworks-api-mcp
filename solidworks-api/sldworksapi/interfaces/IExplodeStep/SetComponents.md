---
type: method
interface: IExplodeStep
member: SetComponents
returns: void
parameters:
  -
    name: Components
    type: System.Object
    description: Array of components
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IExplodeStep.GetComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - explode
  - step
  - setcomponents
  - iexplodestep
  - object
  - void
---

# IExplodeStep.SetComponents

Specifies the components of this explode step.

## Signature

```csharp
void SetComponents( 
   System.Object
Components
)
```
## Parameters

- `Components` (System.Object): Array of components

## Return Value

Unknown.

## Remarks

Modifying components during editing of this regular explode step modifies the rotational axis if:
the rotational axis was not provided during creation,
- and -
the component to which it referred (the last component in the selection list) was removed during editing.
In that case, a rotational axis using the last selected component in the selection list is created.

## See Also

- `IExplodeStep.GetComponents`