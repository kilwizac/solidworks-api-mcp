---
type: method
interface: IMassProperty2
member: Recalculate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - recalculate
  - imassproperty2
  - mass
  - property2
  - boolean
---

# IMassProperty2.Recalculate

Recalculates the mass properties of the selectied bodies/components.

## Signature

```csharp
System.Boolean Recalculate()
```
## Parameters

None.

## Return Value

True if recalculation is successful, false if not

## Remarks

Call this method after overriding mass properties (center of mass, mass, moments of inertia, principal axes orientation, or principal moments of inertia) or resetting
IMassProperty2::IncludeHiddenBodiesOrComponents
.

## Examples

- IMassProperty2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMassProperty2)