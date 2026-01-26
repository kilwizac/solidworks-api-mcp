---
type: method
interface: IEnvironment
member: IGetSymLines
returns: System.Double
parameters:
  -
    name: SymId
    type: System.String
    description: Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IEnvironment.GetSymLines
keywords:
  - symbols
  - geometric
  - tolerancing
  - igetsymlines
  - ienvironment
  - environment
  - sym
  - lines
  - id
  - string
  - double
---

# IEnvironment.IGetSymLines

Gets an array that defines all lines in the specified geometric tolerance symbol.

## Signature

```csharp
System.Double IGetSymLines( 
   System.String
SymId
)
```
## Parameters

- `SymId` (System.String): Name of the geometric tolerance symbol formatted as: < LibraryName-SymbolName > where LibraryName and SymbolName are in C:\ProgramData\SolidWorks\SolidWorks 20 nn \ lang \ english\gtol.sym . NOTE : You must include the right- and left-angle brackets and separate LibraryName and SymbolName with a hyphen; for example, <MOD-DEG>.

## Return Value

in-process, unmanaged C++: Pointer to an array of doubles (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Each line in the geometric tolerance symbol is defined by two points. The size of the array returned by this method is based on the number of lines within this geometric tolerance symbol. You can determine this number using the return value line count from
IEnvironment::IGetSymEdgeCounts
.
The format of return value is the following array of doubles (in this example, for the
i
th line):
retval[6 * i + 0] = x coordinate of first point
retval[6 * i + 1] = y coordinate of first point
retval[6 * i + 2] = z coordinate of first point
retval[6 * i + 3] = x coordinate of second point
retval[6 * i + 4] = y coordinate of second point
retval[6 * i + 5] = z coordinate of second point

## See Also

- `IEnvironment.GetSymLines`