---
type: method
interface: ICustomPropertyManager
member: Get4
returns: System.Boolean
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property
  -
    name: UseCached
    type: System.Boolean
    description: True if the configuration has been activated, false if not (see Remarks )
  -
    name: ValOut
    type: System.String
    description: Value of the custom property
  -
    name: ResolvedValOut
    type: System.String
    description: Evaluated value of the custom property
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - get4
  - icustompropertymanager
  - custom
  - manager
  - field
  - name
  - string
  - use
  - cached
  - boolean
  - val
  - out
  - resolved
  - properties
  - referenced
  - part
  - vb
  - net
  - vba
---

# ICustomPropertyManager.Get4

Obsolete. Superseded by ICustomPropertyManager::Get5.

## Signature

```csharp
System.Boolean Get4( 
   System.String
FieldName
,
   System.Boolean
UseCached
,
   out System.String
ValOut
,
   out System.String
ResolvedValOut
)
```
## Parameters

- `FieldName` (System.String): Name of the custom property
- `UseCached` (System.Boolean): True if the configuration has been activated, false if not (see Remarks )
- `ValOut` (System.String): Value of the custom property
- `ResolvedValOut` (System.String): Evaluated value of the custom property

## Return Value

True if up-to-date data is returned, false if not (see Remarks )

## Remarks

This method can get the cached custom property, even if the configuration is not currently active, without having to change configurations.
If UseCached is set to...
And the configuration has already been activated...
Then...
True
Yes
Up-to-date data is returned and return value = true
True
No
Cached data is returned and return value = false
False
Yes
Up-to-date data is returned and return value = true
False
No
Up-to-date data is returned and return value = true
This method returns configuration-specific, linked, custom-property, evaluated data more quickly than the now obsolete
ICustomPropertyManager::Get2
, if the configuration was previously activated.
If you always want up-to-date data, then you should set UseCached to false. This might result in a more time-consuming call if the configuration was not previously activated.
This method does not preface the resolved evaluated values of external referenced documents with
fromparent+
, unlike the now obsolete
ICustomPropertyManager::Get3
.

## Examples

- Get Custom Properties of Referenced Part (C#) (Get_Custom_Properties_of_Referenced_Part_Example_CSharp.htm)
- Get Custom Properties of Referenced Part (VB.NET) (Get_Custom_Properties_of_Referenced_Part_Example_VBNET.htm)
- Get Custom Properties of Referenced Part (VBA) (Get_Custom_Properties_of_Referenced_Part_Example_VB.htm)