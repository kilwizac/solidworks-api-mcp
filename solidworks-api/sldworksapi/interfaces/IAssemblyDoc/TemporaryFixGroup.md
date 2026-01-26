---
type: method
interface: IAssemblyDoc
member: TemporaryFixGroup
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.FixComponent
  - IAssemblyDoc.UnfixComponent
  - IComponent2.IsFixed
keywords:
  - fix
  - component
  - components
  - see
  - also
  - icomponent2
  - group
  - temporaryfixgroup
  - iassemblydoc
  - assembly
  - doc
  - temporary
  - void
  - temporarily
  - vb
  - net
  - vba
---

# IAssemblyDoc.TemporaryFixGroup

Temporarily fix or group selected components during such operations as drag, move, rotate, etc.

## Signature

```csharp
void TemporaryFixGroup()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

Use the following selection marks with
IModelDocExtension::SelectByID2
to select the components:
0 = Components to fix
2 = Components to group
Call
IAssemblyDoc::TemporaryFixGroupExit
to change the components back to floating or ungrouped.

## Examples

- Temporarily Fix and Group Components (C#) (Temporarily_Fix_and_Group_Components_Example_CSharp.htm)
- Temporarily Fix and Group Components (VB.NET) (Temporarily_Fix_and_Group_Components_Example_VBNET.htm)
- Temporarily Fix and Group Components (VBA) (Temporarily_Fix_and_Group_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.FixComponent`
- `IAssemblyDoc.UnfixComponent`
- `IComponent2.IsFixed`