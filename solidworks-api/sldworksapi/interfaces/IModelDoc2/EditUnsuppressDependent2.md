---
type: method
interface: IModelDoc2
member: EditUnsuppressDependent2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.EditSuppress2
  - IModelDoc2.EditUnsuppress2
keywords:
  - feature
  - see
  - also
  - ifeature
  - unsuppress
  - components
  - icomponent2
  - features
  - dependent
  - editunsuppressdependent2
  - imodeldoc2
  - model
  - doc2
  - edit
  - dependent2
  - boolean
---

# IModelDoc2.EditUnsuppressDependent2

Unsuppresses the selected feature or component and their dependents.

## Signature

```csharp
System.Boolean EditUnsuppressDependent2()
```
## Parameters

None.

## Return Value

True if the selected feature or component and their dependents are unsuppressed, false if not

## Remarks

This method is identical to the obsoleted IModelDoc2::EditUnsuppressDependent method. The version number was incremented to allow Visual Basic applications to take advantage of information not available in the obsoleted IPartDoc::EditUnsuppressDependent method.

## See Also

- `IModelDoc2.EditSuppress2`
- `IModelDoc2.EditUnsuppress2`