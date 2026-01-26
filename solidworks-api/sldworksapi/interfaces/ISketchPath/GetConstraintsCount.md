---
type: method
interface: ISketchPath
member: GetConstraintsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPath.GetConstraints
keywords:
  - constraints
  - getconstraintscount
  - isketchpath
  - sketch
  - path
  - count
  - int32
---

# ISketchPath.GetConstraintsCount

Gets the number of constraints in this sketch path.

## Signature

```csharp
System.Int32 GetConstraintsCount()
```
## Parameters

None.

## Return Value

Number of constraints

## Remarks

Call this method before calling
ISketchPath::IGetConstraints
to get the size of the array for that method.

## Examples

- ISketchPath (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPath)

## See Also

- `ISketchPath.GetConstraints`