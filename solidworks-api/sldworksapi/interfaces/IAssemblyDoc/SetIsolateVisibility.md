---
type: method
interface: IAssemblyDoc
member: SetIsolateVisibility
returns: void
parameters:
  -
    name: Option
    type: System.Int32
    description: Display characteristics of all of the components not selected to isolate as defined in swIsolateVisibility_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - isolate
  - setisolatevisibility
  - iassemblydoc
  - assembly
  - doc
  - visibility
  - option
  - int32
  - void
  - component
  - vb
  - net
  - vba
---

# IAssemblyDoc.SetIsolateVisibility

Sets the display characteristics of all of the components not selected to isolate.

## Signature

```csharp
void SetIsolateVisibility( 
   System.Int32
Option
)
```
## Parameters

- `Option` (System.Int32): Display characteristics of all of the components not selected to isolate as defined in swIsolateVisibility_e

## Return Value

Unknown.

## Remarks

Before you
exit isolate
, you can
save the display characteristics to a new display state
, which you can access from the ConfigurationManager. If you do not save before exiting isolate, then the display returns to its original state.

## Examples

- Isolate Component (C#) (Isolate_Component_Example_CSharp.htm)
- Isolate Component (VB.NET) (Isolate_Component_Example_VBNET.htm)
- Isolate Component (VBA) (Isolate_Component_Example_VB.htm)