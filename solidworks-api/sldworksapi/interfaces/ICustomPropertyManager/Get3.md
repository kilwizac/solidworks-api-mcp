---
type: method
interface: ICustomPropertyManager
member: Get3
returns: System.Boolean
parameters:
  -
    name: FieldName
    type: System.String
    description: Name of the custom property
  -
    name: UseCached
    type: System.Boolean
    description: True if configuration has been activated, false if not (see Remarks )
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
  - get3
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
---

# ICustomPropertyManager.Get3

Obsolete. Superseded by ICustomPropertyManager::Get4.

## Signature

```csharp
System.Boolean Get3( 
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
- `UseCached` (System.Boolean): True if configuration has been activated, false if not (see Remarks )
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
Up-to-date data is returned and return value = True
True
No
Cached data is returned and return value = False
False
Yes
Up-to-date data is returned and return value = True
False
No
Up-to-date data is returned and return value = True
This method returns configuration-specific, linked, custom-property, evaluated data more quickly than the now obsolete
ICustomPropertyManager::Get2 method
, if the configuration was previously activated.
If you always want up-to-date data, then you should set UseCached to false. This may result in a more time-consuming call if the configuration was not previously activated.