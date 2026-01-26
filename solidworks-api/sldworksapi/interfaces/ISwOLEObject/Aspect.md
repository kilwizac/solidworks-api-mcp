---
type: property
interface: ISwOLEObject
member: Aspect
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - aspect
  - iswoleobject
  - sw
  - ole
  - object
  - int32
readonly: true
---

# ISwOLEObject.Aspect

Gets the viewing aspect for this OLE object.

## Signature

```csharp
System.Int32 Aspect {get;}
```
## Parameters

None.

## Return Value

Viewing aspect as defined in the DVASPECT enumeration (see Remarks )

## Remarks

The ViewingAspect argument uses the DVASPECT enumeration, which has the following values:
DVASPECT_CONTENT = 1
DVASPECT_THUMBNAIL = 2
DVASPECT_ICON = 4
DVASPECT_DOCPRINT = 8
See the MSDN documentation for additional details about the DVASPECT enumeration.

## Examples

- ISwOLEObject (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISwOLEObject)