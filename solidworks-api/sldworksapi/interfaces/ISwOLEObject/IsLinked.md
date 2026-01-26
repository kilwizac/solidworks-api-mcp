---
type: property
interface: ISwOLEObject
member: IsLinked
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - ISwOLEObject.FileName
keywords:
  - islinked
  - iswoleobject
  - sw
  - ole
  - object
  - linked
  - boolean
readonly: true
---

# ISwOLEObject.IsLinked

Gets whether the OLE objects are linked to external files or not.

## Signature

```csharp
System.Boolean IsLinked {get;}
```
## Parameters

None.

## Return Value

True if the OLE objects are linked to external files, false if they are embedded

## Examples

- ISwOLEObject (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwOLEObject)

## See Also

- `ISwOLEObject.FileName`