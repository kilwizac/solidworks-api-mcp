---
type: method
interface: ISketchPath
member: GetRelationsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPath.GetRelations
keywords:
  - relations
  - getrelationscount
  - isketchpath
  - sketch
  - path
  - count
  - int32
---

# ISketchPath.GetRelationsCount

Gets the number of sketch relations in this sketch path.

## Signature

```csharp
System.Int32 GetRelationsCount()
```
## Parameters

None.

## Return Value

Number of sketch relations

## Remarks

Call this method before calling
ISketchPath::IGetRelations
to get the size of the array for that method.

## Examples

- ISketchPath (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPath)

## See Also

- `ISketchPath.GetRelations`