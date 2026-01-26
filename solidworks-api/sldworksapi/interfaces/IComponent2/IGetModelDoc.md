---
type: method
interface: IComponent2
member: IGetModelDoc
returns: ModelDoc2
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetModelDoc
keywords:
  - igetmodeldoc
  - icomponent2
  - component2
  - model
  - doc
  - doc2
---

# IComponent2.IGetModelDoc

Obsolete. Superseded by IComponent2::GetModelDoc2.

## Signature

```csharp
ModelDoc2 IGetModelDoc()
```
## Parameters

None.

## Return Value

Pointer to the model document

## Remarks

This method might return NULL if:
a component is suppressed or lightweight.
the component ID is not loaded into memory by SOLIDWORKS.
For more information on lightweight components, see
Work With Lightweight Components
.
When you use the IModelDoc2 object of a component, you do not have access to whatever uniqueness might exist for this instance of the assembly IComponent2. This occurs because the IModelDoc2 object goes back to the saved part file. By comparison, the IComponent2 object gathers information at the assembly level. This allows IComponent2 objects to recognize assembly-level changes made to a component instance (for example, assembly-level features and material changes).
In addition, the IModelDoc2 object returned from this method represents the last-saved state. If the component part is currently open, then the IModelDoc2 object represents the state of the opened document. For example, if the component part is not open and it was last saved in the default configuration, then IComponent2::GetModelDoc
returns a IModelDoc2 pointer representing that state. To get access to other configuration information (such as features and configuration properties), you must activate the part and show the desired configuration using
IModelDoc2::ShowConfiguration2
.
If this component is the root component, then this method returns a NULL pointer. For more information, see
IConfiguration::IGetRootComponent2.

## See Also

- `IComponent2.GetModelDoc`