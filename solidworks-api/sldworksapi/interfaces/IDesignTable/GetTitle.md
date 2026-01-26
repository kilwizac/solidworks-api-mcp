---
type: method
interface: IDesignTable
member: GetTitle
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - gettitle
  - idesigntable
  - design
  - table
  - title
  - string
  - vba
  - vb
  - net
---

# IDesignTable.GetTitle

Gets the design table title.

## Signature

```csharp
System.String GetTitle()
```
## Parameters

None.

## Return Value

Design table title

## Remarks

This method returns the title of the design table. If the title row is absent, then this method returns an empty string. If the title row exists but there is no title, then this method returns a single space.

## Examples

- Get Design Table (VBA) (Get_Design_Table_Example_VB.htm)
- Get Design Table (VB.NET) (Get_Design_Table_Example_VBNET.htm)
- Get Design Table (C#) (Get_Design_Table_Example_CSharp.htm)