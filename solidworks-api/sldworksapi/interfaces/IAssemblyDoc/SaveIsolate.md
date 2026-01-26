---
type: method
interface: IAssemblyDoc
member: SaveIsolate
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of the new display state to which to save the characteristics of the isolated components
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - file-io
  - ui
related:
  - IAssemblyDoc.ExitIsolate
  - IAssemblyDoc.SetIsolateVisibility
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - display
  - states
  - isolate
  - components
  - icomponent2
  - saveisolate
  - assembly
  - doc
  - save
  - name
  - string
  - boolean
  - component
  - vb
  - net
  - vba
---

# IAssemblyDoc.SaveIsolate

Saves the display characteristics of the isolated components to a new display state.

## Signature

```csharp
System.Boolean SaveIsolate( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the new display state to which to save the characteristics of the isolated components

## Return Value

True if a new display state of the characteristics of the isolated components is created, false if not

## Examples

- Isolate Component (C#) (Isolate_Component_Example_CSharp.htm)
- Isolate Component (VB.NET) (Isolate_Component_Example_VBNET.htm)
- Isolate Component (VBA) (Isolate_Component_Example_VB.htm)

## See Also

- `IAssemblyDoc.ExitIsolate`
- `IAssemblyDoc.SetIsolateVisibility`