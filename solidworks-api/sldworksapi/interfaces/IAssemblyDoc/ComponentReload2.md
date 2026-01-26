---
type: method
interface: IAssemblyDoc
member: ComponentReload2
returns: System.Int32
parameters:
  -
    name: Component
    type: System.Object
    description: IComponent2
  -
    name: ReadOnly
    type: System.Boolean
    description: True to set Component read-only after reload, false to allow write access
  -
    name: Options
    type: System.Int32
    description: Reload option as defined by swComponentReloadOption_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.ReplaceComponents2
  - IModelDoc2.ReloadOrReplace
keywords:
  - components
  - see
  - also
  - icomponent2
  - reload
  - componentreload2
  - iassemblydoc
  - assembly
  - doc
  - component
  - reload2
  - object
  - read
  - only
  - boolean
  - options
  - int32
---

# IAssemblyDoc.ComponentReload2

Reloads and/or sets the read-only state of the specified component.

## Signature

```csharp
System.Int32 ComponentReload2( 
   System.Object
Component
,
   System.Boolean
ReadOnly
,
   System.Int32
Options
)
```
## Parameters

- `Component` (System.Object): IComponent2
- `ReadOnly` (System.Boolean): True to set Component read-only after reload, false to allow write access
- `Options` (System.Int32): Reload option as defined by swComponentReloadOption_e

## Return Value

Error code as defined by swComponentReloadError_e

## Remarks

This method is analogous to the Reload dialog that appears when you right-click on an assembly component in the FeatureManager design tree and select
Reload
. For more information, read the
SOLIDWORKS Design user-interface Help > Fundamentals > Document Basics > Multi-User Environment > Reload
topic.

## See Also

- `IAssemblyDoc.ReplaceComponents2`
- `IModelDoc2.ReloadOrReplace`