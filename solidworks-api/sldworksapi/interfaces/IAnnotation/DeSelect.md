---
type: method
interface: IAnnotation
member: DeSelect
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - selections
related: []
keywords:
  - deselect
  - iannotation
  - annotation
  - de
  - select
  - boolean
---

# IAnnotation.DeSelect

Deselects this annotation.

## Signature

```csharp
System.Boolean DeSelect()
```
## Parameters

None.

## Return Value

True if the feature object was successfully deselected, false otherwise

## Remarks

Use
IModelDoc2::DeSelectByID
instead of using this method. This method does not work
well when a PropertyManager page is open or a command is running. IModelDoc2::DeSelectByID
handles selection correctly whether or not a command is running.