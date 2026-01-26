---
type: method
interface: IAssemblyDoc
member: TemporaryFixGroupExit
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
  - components
  - see
  - also
  - icomponent2
  - float
  - ungroup
  - temporaryfixgroupexit
  - iassemblydoc
  - assembly
  - doc
  - temporary
  - fix
  - group
  - exit
  - void
  - temporarily
  - vb
  - net
  - vba
---

# IAssemblyDoc.TemporaryFixGroupExit

Changes components that were temporarily fixed or grouped back to floating or ungrouped after such operations as drag, move, rotate, etc.

## Signature

```csharp
void TemporaryFixGroupExit()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

To temporarily change floating or ungrouped components to fixed or grouped, call
IAssemblyDoc::TemporaryFixGroup
.

## Examples

- Temporarily Fix and Group Components (C#) (Temporarily_Fix_and_Group_Components_Example_CSharp.htm)
- Temporarily Fix and Group Components (VB.NET) (Temporarily_Fix_and_Group_Components_Example_VBNET.htm)
- Temporarily Fix and Group Components (VBA) (Temporarily_Fix_and_Group_Components_Example_VB.htm)

## See Also

- `IAssemblyDoc.FixComponent`
- `IAssemblyDoc.UnfixComponent`
- `IComponent2.IsFixed`