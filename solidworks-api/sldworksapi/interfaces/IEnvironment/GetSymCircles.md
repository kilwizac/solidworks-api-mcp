---
type: method
interface: IEnvironment
member: GetSymCircles
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
  - IEnvironment.IGetSymCircles
keywords:
  - symbols
  - geometric
  - tolerancing
  - getsymcircles
  - ienvironment
  - environment
  - sym
  - circles
  - id
  - string
  - object
---

# IEnvironment.GetSymCircles

Gets an array that defines all circles in the geometric tolerance symbol.

## Signature

```csharp
System.Object GetSymCircles( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in the SOLIDWORKS text file C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

Array (see Remarks )

## Remarks

Each circle in the geometric tolerance symbol is defined by its radius and center point. The size of the array returned is based on the number of circles within this symbol. You can determine this number using the return value circle count from
IEnvironment::GetSymEdgeCounts
.
The format of return value is the following array of doubles (in this example, for the
i
th circle):
retval[4 * i] = radius
retval[4 * i + 1] = x coordinate of center point
retval[4 * i + 2] = y coordinate of center point
retval[4 * i + 3] = z coordinate of center point

## See Also

- `IEnvironment.IGetSymCircles`