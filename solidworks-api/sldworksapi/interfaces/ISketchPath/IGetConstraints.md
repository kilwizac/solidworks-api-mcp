---
type: method
interface: ISketchPath
member: IGetConstraints
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of sketch constraints
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related:
  - ISketchPath.GetConstraints
keywords:
  - constraints
  - igetconstraints
  - isketchpath
  - sketch
  - path
  - count
  - int32
  - string
---

# ISketchPath.IGetConstraints

Gets the names of the constraints in this sketch path.

## Signature

```csharp
System.String IGetConstraints( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of sketch constraints

## Return Value

in-process, unmanaged C++: Pointer to an array of sketch constraints VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ISketchPath::GetConstraintsCount
to get the value of count.

## See Also

- `ISketchPath.GetConstraints`