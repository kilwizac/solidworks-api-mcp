---
type: method
interface: IEnvironment
member: GetSymTriangles
returns: System.Object
parameters:
  -
    name: SymId
    type: System.String
    description: Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEnvironment.IGetSymTriangles
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymtriangles
  - ienvironment
  - environment
  - sym
  - triangles
  - id
  - string
  - object
---

# IEnvironment.GetSymTriangles

Gets an array that defines all triangles in the specified geometric tolerance symbol.

## Signature

```csharp
System.Object GetSymTriangles( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

Array (see Remarks )

## Remarks

The size of the array returned by this method is based on the number of triangles in this geometric tolerance symbol. You can determine this number using the return value triangle count from
IEnvironment::GetSymEdgeCounts
.
The format of the returned data is an array of doubles:
retval[0] x coordinate of triangle point 1
retval[1] y coordinate of triangle point 1
retval[2] z coordinate of triangle point 1
retval[3] x coordinate of triangle point 2
retval[4] y coordinate of triangle point 2
retval[5] z coordinate of triangle point 2
retval[6] x coordinate of triangle point 3
retval[7] y coordinate of triangle point 3
retval[8] z coordinate of triangle point 3
retval[9] Boolean returned as a double that describes if the triangle is filled
retval[10] describes the
line type
of the triangle
where this set of data repeats itself for each triangle in the specified geometric tolerance symbol.

## See Also

- `IEnvironment.IGetSymTriangles`